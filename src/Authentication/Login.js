import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('E-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'Senha precisa ter no mínimo 6 caracteres')
        .required('Password é obrigatório')
});

const handleSubmit = (values, setSubmitting, resetForm) => {
    setSubmitting(true);

    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
    }, 500);
};

export const Login = () => (
    <div>
        <h1>Sign In</h1>
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {handleSubmit(values, setSubmitting, resetForm)}}
        >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
                <Form onSubmit={handleSubmit}>
                    <div className='input-row'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='email@email.com'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>

                    <div className='input-row'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && <div>{errors.password}</div>}
                    </div>

                    <div className='input-row'>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);


export default Login;