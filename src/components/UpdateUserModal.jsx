"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-toastify";

export function UpdateUserModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const name = e.target.name.value;
            const image = e.target.image.value;

            await authClient.updateUser({
                name,
                image,
            });

            toast.success("Updated Profile Successfully!", {
                className: "bg-zinc-900 text-slate-300 rounded-2xl border border-zinc-700",
            });

            setIsOpen(false);
        } catch (error) {
            toast.error("Failed to update profile!", {
                className: "bg-zinc-900 text-slate-300 rounded-2xl border border-zinc-700",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button variant="secondary" onPress={() => setIsOpen(true)}>
                <BiEdit /> Update Profile
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Image URL" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button
                                            onPress={() => setIsOpen(false)}
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit" isLoading={isLoading}>
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}