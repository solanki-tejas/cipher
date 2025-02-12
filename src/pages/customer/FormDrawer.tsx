import React from "react";
import {
  Typography,
  Drawer,
  Box,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Customer, DrawerMode } from "@/types/customer";
import {
  borderRadius,
  primaryColor,
  secondaryColor,
} from "@/styles/light-theme";

interface CustomerDrawerProps {
  open: boolean;
  mode: DrawerMode;
  initialData: Customer;
  onClose: () => void;
  onSubmit: (values: Customer) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
});

const FormDrawer: React.FC<CustomerDrawerProps> = ({
  open,
  mode,
  initialData,
  onClose,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
      onClose();
    },
  });

  const theme = useTheme();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
          border: "2px solid lightgrey",
        },
      }}
    >
      <div className="h-full flex flex-col gap-y-6">
        <Typography variant="h5" fontWeight={600}>
          {mode} Customer
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          className="flex-1 flex flex-col justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <TextField
              disabled={mode === "View"}
              name="name"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
            />

            <TextField
              disabled={mode === "View"}
              name="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
            />

            <TextField
              disabled={mode === "View"}
              name="phone"
              label="Phone"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={formik.touched.phone && !!formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
              fullWidth
            />

            <TextField
              disabled={mode === "View"}
              rows={5}
              name="address"
              label="Address"
              multiline
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              error={formik.touched.address && !!formik.errors.address}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
            />
          </div>

          <Box className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              disabled={mode === "View" || !formik.dirty || formik.isSubmitting}
            >
              Save
            </Button>
          </Box>
        </form>
      </div>
    </Drawer>
  );
};

export default FormDrawer;
