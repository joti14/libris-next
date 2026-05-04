'use client'
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center shadow-sm border-slate-200 mt-6 sm:mt-10 p-4 sm:p-6">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-lg sm:text-xl font-bold text-center mt-3">
                    {user?.name}
                </h2>

                <p className="text-muted text-sm sm:text-base text-center break-all">
                    {user?.email}
                </p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default MyProfilePage;