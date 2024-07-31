// name, population, terrain, id, mass, climate, diameter, gravity,orbital_period, surface_water
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const GuardarPlanetas = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      population: '',
      terrain: '',
      mass: '',
      climate: '',
      diameter: '',
      gravity: '',
      orbital_period: '',
      surface_water: '',
    },
    validationSchema: Yup.object({
       name: Yup.string()
        .max(15, 'Must be 15 characters or less')
         .required('Required'),
       population: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    //    population: Yup.string().email('Invalid email address').required('Required'),
        terrain: Yup.string(),
        mass: Yup.string(),
        climate: Yup.string(),
        diameter: Yup.string(),
        gravity: Yup.string(),
        orbital_period: Yup.string(),
        surface_water: Yup.string()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
        <h1 className='text-center'>Agregar Planetas</h1>
    <form onSubmit={formik.handleSubmit}>
    <div className="row">
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

      <label htmlFor="population">Poblacion</label>
      <input
        id="population"
        name="population"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.population && formik.errors.population ? (
        <div>{formik.errors.population}</div>
      ) : null}

      <label htmlFor="terrain">Terreno</label>
      <input
        id="terrain"
        name="terrain"
        type="terrain"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.terrain}
      />
      {formik.touched.terrain && formik.errors.terrain ? (
        <div>{formik.errors.terrain}</div>
      ) : null}

        <label htmlFor="mass">Masa</label>
      <input
        id="mass"
        name="mass"
        type="mass"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mass}
      />
      {formik.touched.mass && formik.errors.mass ? (
        <div>{formik.errors.mass}</div>
      ) : null}

  <label htmlFor="climate">Terreno</label>
      <input
        id="climate"
        name="climate"
        type="climate"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.climate}
      />
      {formik.touched.climate && formik.errors.climate ? (
        <div>{formik.errors.climate}</div>
      ) : null}

<label htmlFor="diameter">Diametro</label>
      <input
        id="diameter"
        name="diameter"
        type="diameter"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.diameter}
      />
      {formik.touched.diameter && formik.errors.diameter ? (
        <div>{formik.errors.diameter}</div>
      ) : null}

<label htmlFor="gravity">Gravedad</label>
      <input
        id="gravity"
        name="gravity"
        type="gravity"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gravity}
      />
      {formik.touched.gravity && formik.errors.gravity ? (
        <div>{formik.errors.gravity}</div>
      ) : null}

<label htmlFor="orbital_period">Orbita</label>
      <input
        id="orbital_period"
        name="orbital_period"
        type="orbital_period"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.orbital_period}
      />
      {formik.touched.orbital_period && formik.errors.orbital_period ? (
        <div>{formik.errors.orbital_period}</div>
      ) : null}

<label htmlFor="surface_water">Superficie con agua</label>
      <input
        id="surface_water"
        name="surface_water"
        type="surface_water"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.surface_water}
      />
      {formik.touched.surface_water && formik.errors.surface_water ? (
        <div>{formik.errors.surface_water}</div>
      ) : null}
      <div className="col-4">
      <button className="mt-3" type="submit">Submit</button>
      </div>
      </div>
    </form>
    </div>
  );
};
