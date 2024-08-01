// name,gender,hair_color,eye_color,birth_year,homeworld,species
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const GuardarPersonaje = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            gender: '',
            hair_color: '',
            eye_color: '',
            birth_year: '',
            homeworld: '',
            species: '',

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            gender: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            hair_color: Yup.string().hair_colorl,
            eye_color: Yup.string().eye_color,
            birth_year: Yup.string().birth_year,
            homeworld: Yup.string().homeworld,
            species: Yup.string().species
        }),
        onSubmit: async values => {
            console.log(values.name);

            let resp = await actions.agregarPersonaje(values.name, values.gender, values.hair_color, values.eye_color, values.birth_year, values.homeworld, values.species)
            if (resp) { console.log("Personaje guardado"); }
        },
    });

    return (
        <div className="container justify-content-center">
            <h1 className='text-start'>Agregar Personaje</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="row w-50 ">
                    <label htmlFor="firstName">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor="gender">Genero</label>
                    <input
                        id="gender"
                        name="gender"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                    />
                    {formik.touched.gender && formik.errors.gender ? (
                        <div>{formik.errors.gender}</div>
                    ) : null}

                    <label htmlFor="hair_color">Color de pelo</label>
                    <input
                        id="hair_color"
                        name="hair_color"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hair_color}
                    />
                    {formik.touched.hair_color && formik.errors.hair_color ? (
                        <div>{formik.errors.hair_color}</div>
                    ) : null}

                    <label htmlFor="eye_color">Color de ojos</label>
                    <input
                        id="eye_color"
                        name="eye_color"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.eye_color}
                    />
                    {formik.touched.eye_color && formik.errors.eye_color ? (
                        <div>{formik.errors.eye_color}</div>
                    ) : null}

                    <label htmlFor="birth_year">Fecha de nacimiento</label>
                    <input
                        id="birth_year"
                        name="birth_year"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birth_year}
                    />
                    {formik.touched.birth_year && formik.errors.birth_year ? (
                        <div>{formik.errors.birth_year}</div>
                    ) : null}

                    <label htmlFor="homeworld">Hogar</label>
                    <input
                        id="homeworld"
                        name="homeworld"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.homeworld}
                    />
                    {formik.touched.homeworld && formik.errors.homeworld ? (
                        <div>{formik.errors.homeworld}</div>
                    ) : null}

                    <label htmlFor="species">Especie</label>
                    <input
                        id="species"
                        name="species"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.species}
                    />
                    {formik.touched.species && formik.errors.species ? (
                        <div>{formik.errors.species}</div>
                    ) : null}

                    <div className="col-4">
                        <button className="mt-3 btn btn-primary" type="submit">Submit</button>
                    </div>
                </div >
            </form>
        </div>
    );
};
export default GuardarPersonaje