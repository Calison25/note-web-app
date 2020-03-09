import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Nome é obrigatório'),
    email: Yup.string()
        .required('E-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'Senha precisa ter no mínimo 6 caracteres')
        .required('Password é obrigatório'),
    confirmPassword: Yup.string()
        .min(6, 'Senha precisa ter no mínimo 6 caracteres')
        .required('Confirmação de senha é obrigatório'),
});

const handleSubmit = (values, setSubmitting, resetForm) => {
    setSubmitting(true);

    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
    }, 500);
};

export const Register = () => (
    <div className='panel-div'>
        <Formik
            initialValues={{name:'', email: '', password: '', confirmPassword: ''}}
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
                            <h5>Criar conta</h5>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                            <label htmlFor='email'>Nome</label>
                            <input
                                className='validate'
                                type='text'
                                name='name'
                                id='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && <div>{errors.name}</div>}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                            <label htmlFor='email'>E-mail</label>
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
                        <div className='input-field col s6'>
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
                            {errors.password && touched.password && <div>{errors.password}</div>}
                        </div>
                        <div className='input-field col s6'>
                            <label htmlFor='password'>Confirmar</label>
                            <input
                                className='validate'
                                type='password'
                                name='confirmPassword'
                                id='confirmPassword'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
                        </div>
                    </div>

                    <div className='row'></div>
                    <div className='row'>
                        <div className='col s6 right-align'>
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={isSubmitting}>Criar conta
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);


export default Register;