-- Enable RLS for the user_favorite_exams table
ALTER TABLE public.user_favorite_exams ENABLE ROW LEVEL SECURITY;

-- Allow users to see their own favorite exams
CREATE POLICY "Users can view their own favorite exams."
ON public.user_favorite_exams FOR SELECT
USING (auth.uid() = user_id);

-- Allow users to insert their own favorite exams
CREATE POLICY "Users can insert their own favorite exams."
ON public.user_favorite_exams FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own favorite exams
CREATE POLICY "Users can delete their own favorite exams."
ON public.user_favorite_exams FOR DELETE
USING (auth.uid() = user_id);
