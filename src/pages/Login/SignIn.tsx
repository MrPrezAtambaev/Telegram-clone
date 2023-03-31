import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, FormGroup } from "@mui/material";
// import { FormWrapper } from './SignInAndUpStyles';

const SignUpSchema = Yup.object().shape({
	email: Yup.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

interface MyFormValues {
	email: string;
	password: string;
}

const SignSignInWithEmail = ({ SignSignInWithEmail }: any) => {
	const initialValues: MyFormValues = { email: "", password: "" };
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SignUpSchema}
			onSubmit={(values) => {
				SignSignInWithEmail(values.email, values.password);
			}}
		>
			{({ values, errors, touched, handleChange }) => (
				<Form>
					<FormGroup>
						<h2>Sign In With Email</h2>
						<TextField
							id="email"
							name="email"
							label="Email"
							variant="outlined"
							value={values.email}
							onChange={handleChange}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
							fullWidth
						/>
						<TextField
							id="password"
							name="password"
							label="Password"
							variant="outlined"
							type="password"
							value={values.password}
							onChange={handleChange}
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
							margin="normal"
							fullWidth
						/>
						<Button color="primary" variant="contained" type="submit">
							Submit
						</Button>
					</FormGroup>
				</Form>
			)}
		</Formik>
	);
};

export default SignSignInWithEmail;
