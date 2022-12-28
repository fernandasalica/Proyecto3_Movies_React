import { useState } from "react";
import { toast } from "react-toastify";

const CrudForm = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [directedby, setDirectedby] = useState("");
  const [actors, setActors] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [argument, setArgument] = useState("");

  // const handleChange = (e) => {};

  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Registro cargado");
  };

  const handleReset = (e) => {};

  // useEffect(() => {
  //   console.log(name);
  //   console.log(year);
  //   console.log(category);
  //   console.log(directedby);
  //   console.log(actors);
  //   console.log(story);
  //   console.log(image);
  //   console.log(trailer);
  //   console.log(argument);
  // }, [
  //   name,
  //   year,
  //   category,
  //   directedby,
  //   actors,
  //   story,
  //   image,
  //   trailer,
  //   argument,
  // ]);

  return (
    <div className="crud">
      <h2 className="text-center">AGREGAR NUEVA PELÍCULA</h2>
      <form onSubmit={handleClick} className="form-size mb-5">
        <input
          type="text"
          name="name"
          placeholder="Ingrese nombre de película"
          onInput={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <input
          type="text"
          name="year"
          placeholder="Ingrese año de película"
          onInput={(e) => setYear(e.target.value)}
          value={year}
        />
        <br />
        <br />
        <label for="category">Seleccione Categoría:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="accion">Acción</option>
          <option value="ficcion">Ciencia Ficción</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          name="directedby"
          placeholder="Ingrese director de la película"
          onInput={(e) => setDirectedby(e.target.value)}
          value={directedby}
        />
        <br />
        <br />
        <input
          type="text"
          name="actors"
          placeholder="Ingrese actores de película"
          onInput={(e) => setActors(e.target.value)}
          value={actors}
        />
        <br />
        <br />
        <input
          type="text"
          name="story"
          placeholder="Ingrese resumen de la película"
          onInput={(e) => setStory(e.target.value)}
          value={story}
        />
        <br />
        <br />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen de portada"
          onInput={(e) => setImage(e.target.value)}
          value={image}
        />
        <br />
        <br />
        <input
          type="text"
          name="trailer"
          placeholder="URL del Trailer"
          onInput={(e) => setTrailer(e.target.value)}
          value={trailer}
        />
        <br />
        <br />
        <textarea
          name="argument"
          for="argument"
          placeholder="Describe brevemente el argumento en menos de 300 carácteres"
          maxlength="300"
          onChange={(e) => setArgument(e.target.value)}
          value={argument}
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Enviar" onClick={(e) => handleClick(e)} />
        <br />
        <br />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
