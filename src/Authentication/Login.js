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
    <div className='panel-div'>
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
                        <div className='row'>
                            <div className='row center-align'>
                                <h5>Login</h5>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <label for='email'>E-mail</label>
                                <input
                                    className='validate'
                                    type='email'
                                    name='email'
                                    id='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && <div>{errors.email}</div>}
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <label htmlFor='password'>Senha</label>
                                <input
                                    className='validate'
                                    type='password'
                                    name='password'
                                    id='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <div><a href='#'><b>Esqueceu sua senha?</b></a></div>
                                {errors.password && touched.password && <div>{errors.password}</div>}
                            </div>
                        </div>

                        <div className='row'></div>
                        <div className='row'>
                            <div className='col s6'><a href='#'>Criar conta</a></div>
                            <div className='col s6 right-align'>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={isSubmitting}>Login
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
    </div>
);


export default Login;