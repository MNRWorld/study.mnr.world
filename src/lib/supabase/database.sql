-- Create profiles table
create table profiles (
  id uuid not null references auth.users on delete cascade,
  display_name text,
  avatar_url text,

  primary key (id)
);

alter table profiles enable row level security;

-- Allow public read access
create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

-- Allow users to insert their own profile
create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

-- Allow users to update their own profile
create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Function to delete user
create function public.delete_user()
returns void
language plpgsql
security definer
as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;

-- Grant execute permission to the function
grant execute on function public.delete_user to authenticated;
