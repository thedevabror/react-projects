import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import AuthService from "../services/auth.service";

export function EditUser({ handleEdit, edit }) {
  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstname = formData.get("firstname");
    const user = {
      firstname: firstname,
    };
    try {
      const response = await AuthService.editUser(user);
      console.log(response);
      handleEdit();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };

  return (
    <>
      <Dialog open={edit} size="xs" handler={handleEdit}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Ma'lumotlarni o'zgartirish
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleEdit}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={(e) => handleAdd(e)}>
          <DialogBody>
            <div className="grid gap-2">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Ismingiz
              </Typography>
              <Input label="Ism" name="firstname" color="purple" />
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Familyangiz
              </Typography>
              <Input label="Familiya" name="lastname" color="purple" />
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Email manzilingiz
              </Typography>
              <Input label="Email" name="username" color="purple" />
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Telefon raqamingiz
              </Typography>
              <Input label="Raqam" name="mobile" color="purple" />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleEdit}>
              Bekor qilish
            </Button>
            <Button className="bg-primary" color="gray" type="submit">
              O'zgartirish
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
