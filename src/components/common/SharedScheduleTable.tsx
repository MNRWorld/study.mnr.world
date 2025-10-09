
'use client';

import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

interface Column<T> {
	header: string;
	accessor: (item: T) => React.ReactNode;
	className?: string;
}

interface SharedScheduleTableProps<T> {
	data: T[];
	columns: Column<T>[];
	caption?: string;
}

const SharedScheduleTable = <T extends {}>({
	data,
	columns,
	caption,
}: SharedScheduleTableProps<T>) => {
	if (!data || data.length === 0) {
		return (
			<div className='text-center p-8 text-muted-foreground'>
				{caption || 'কোনো তথ্য পাওয়া যায়নি'}
			</div>
		);
	}

	return (
		<div className='mt-4 w-full border border-border bg-card rounded-2xl shadow-lg'>
			<Table>
				<TableHeader>
					<TableRow>
						{columns.map((col, index) => (
							<TableHead
								key={index}
								className={`sticky top-[66px] sm:top-[66px] z-10 text-center font-bold bg-primary text-primary-foreground ${
									index === 0 ? 'rounded-tl-2xl' : ''
								} ${index === columns.length - 1 ? 'rounded-tr-2xl' : ''} ${
									col.className || ''
								}`}
							>
								{col.header}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item, index) => (
						<TableRow key={index} className='even:bg-muted/50'>
							{columns.map((col, colIndex) => (
								<TableCell
									key={colIndex}
									className='text-center align-top truncate'
								>
									{col.accessor(item)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default SharedScheduleTable;
