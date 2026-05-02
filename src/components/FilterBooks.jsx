'use client';
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup, Description, Label, Surface } from "@heroui/react";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const FilterBooks = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const getInitialCategories = () => {
        const categories = searchParams.getAll('category');
        return categories.length > 0 ? categories : ['all'];
    };

    const [selectedCategories, setSelectedCategories] = useState(getInitialCategories);

    const handleCategoryChange = (values) => {
        let newValues = values;

        if (values.includes('all')) {
            newValues = ['all'];
        } else if (values.length === 0) {
            newValues = ['all'];
        }

        setSelectedCategories(newValues);
        const params = new URLSearchParams(searchParams);

        const filteredValues = newValues.filter(v => v !== 'all');

        params.delete('category');

        filteredValues.forEach(cat => {
            params.append('category', cat);
        });

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Surface className="w-full rounded-3xl p-6 border border-slate-100 bg-base-100 shadow-sm">
            <CheckboxGroup
                name="categories"
                value={selectedCategories}
                onChange={handleCategoryChange}
                variant="secondary"
            >
                <Label className='text-xl text-black'>Filter by Category</Label>
                <Checkbox value="all">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>All Books</Label>
                    </Checkbox.Content>
                </Checkbox>
                <Checkbox value="Story">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>Story</Label>
                    </Checkbox.Content>
                </Checkbox>
                <Checkbox value="Tech">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>Tech</Label>
                    </Checkbox.Content>
                </Checkbox>
                <Checkbox value="Science">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>Science</Label>
                    </Checkbox.Content>
                </Checkbox>
            </CheckboxGroup>
        </Surface>
    );
};

export default FilterBooks;