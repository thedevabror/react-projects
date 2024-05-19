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

export function AddAddress({ handleOpen, open }) {
  const id = sessionStorage.getItem("id");
  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const street = formData.get("street");
    const city = formData.get("city");
    const state = formData.get("state");
    const zip = formData.get("zip");
    const address = {
      street: street,
      city: city,
      state: state,
      zip: zip,
    };
    try {
      const response = await AuthService.addAddress(address, id);
      console.log(response);
      handleOpen();
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
    console.log(address);
  };

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Add address
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
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
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Manzilingiz
              </Typography>
              <Input label="Street" name="street" required />
              <Input label="City" name="city" required />
              <Input label="State" name="state" required />
              <Input label="Zip" name="zip" required />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              Bekor qilish
            </Button>
            <Button className="bg-primary" color="gray" type="submit">
              Qo'shish
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
