import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postActivities, getCountries } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavBar from '../NavBar/NavBarHome.jsx';

export default function NewActivity() {
  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = 'Se requiere una actividad turística';
    } else if (!/^[A-Za-z.\n -]+$/.test(input.name)) {
      errors.name = 'Solo se admiten letras';
    }

    if (!input.difficulty || input.difficulty === '-') {
      errors.difficulty = 'Seleccione una dificultad';
    }

    if (!input.season || input.season === '-') {
      errors.season = 'Seleccione una temporada';
    }

    if (!input.duration) {
      errors.duration = 'Se require el tiempo de duración';
    } else if (input.duration < 1) {
      errors.duration = 'La cantidad de días no puede ser negativa ó 0';
    } else if (!/^[0-9.\n -]+$/.test(input.duration)) {
      errors.duration = 'Solo se admiten numeros';
    }

    if (!input.countries.length) {
      errors.countries = 'Por favor, indique al menos un país';
    }

    return errors;
  }

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //! Estados
  //!Éste sería mi estado manejador de errores para el formulario.

  const [errors, setErrors] = useState({});
  //Éste sería mi estado para los inputs del form.
  const [input, setInput] = useState({
    name: '',
    season: '',
    difficulty: '',
    duration: '',
    countries: [],
  });
  //!Funciones "handles" de mi formulario.
  //!Con éste, modifico el estado name, season, difficult y duration.
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  //!Con éste, modifico el estado de países y que vaya verificando si ya estaba o no incluido en el array de countries
  function handleSelect(e) {
    if (!input.countries.includes(e.target.value) && e.target.value !== '-') {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          countries: [...input.countries, e.target.value],
        })
      );
    }
  }
  //!Con éste, hago dispatch del postActivities
  function handleSubmit(e) {
    if (
      input.name &&
      input.season &&
      input.difficulty &&
      input.duration &&
      input.countries
    ) {
      e.preventDefault();
      dispatch(postActivities(input));
      alert('Actividad creada');
      setInput({
        name: '',
        season: '',
        difficulty: '',
        duration: '',
        countries: [],
      });
    }
  }
  console.log(input.countries);
  function handleDelete(country) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== country),
    });
    setErrors(
      validate({
        ...input,
        countries: input.countries.filter((c) => c !== country),
      })
    );
  }
  return (
    <section>
      <NavBar />
      <section>
        <Link to="/home">
          <button> Volver</button>
        </Link>
        <h1>Agrega una actividad nueva!</h1>
      </section>

      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Nombre:</label>
            <input
              maxlength="20"
              onChange={(e) => handleChange(e)}
              type="text"
              value={input.name}
              name="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Duración:</label>
            <input
              maxlength="2"
              onChange={(e) => handleChange(e)}
              placeholder="Duración de la actividad..."
              type="text"
              value={input.duration}
              name="duration"
            />
            {errors.duration && <p>{errors.duration}</p>}
          </div>
          <div>
            <label>Dificultad:</label>
            <select onChange={(e) => handleChange(e)} name="difficulty">
              <option selected="-" value="-">
                -
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>
          <div>
            <label>Temporada:</label>
            <select onChange={(e) => handleChange(e)} name="season">
              <option value="-">-</option>
              <option value="Winter">Invierno</option>
              <option value="Autumn">Otoño</option>
              <option value="Spring">Primavera</option>
              <option value="Summer">Verano</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
          </div>
          <div>
            <label>Pais:</label>
            <select onChange={(e) => handleSelect(e)}>
              <option value="-">-</option>
              {countries.map((country) => {
                return <option value={country.name}>{country.name}</option>;
              })}
            </select>
            {errors.countries && <p>{errors.countries}</p>}
          </div>
          {input.countries?.map((country) => (
            <div key={country}>
              <button onClick={() => handleDelete(country)}>x</button>
              <p>{country}</p>
            </div>
          ))}

          {!input.name ||
          !input.difficulty ||
          !input.duration ||
          input.difficulty === '-' ||
          !input.season ||
          input.season === '-' ||
          !input.countries.length ? (
            <button disabled type="submit">
              Crear Actividad!
            </button>
          ) : (
            <button type="submit">Crear Actividad!</button>
          )}
        </form>
      </section>
    </section>
  );
}
