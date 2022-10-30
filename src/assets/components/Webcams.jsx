import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { WebcamGrid } from './WebcamGrid';
import '../css/styles.css'

function Webcams() {

  const [categories, setCategories] = useState(['ES']);
  
  const onAddCategory = (NewCategory) => {
     // console.log(NewCategory);
    // setCategories( categories.concat(['Nirvana']));
    // setCategories( [...categories, 'Placebo'] );

    // Convierto a minusculas el arreglo inicial para compararlo
    //const lowercased = categories.map((category) => category.toLowerCase());
    //console.log (lowercased);

    // Si esta la categoria enviada dentro del arreglo inicial, sale de la funcion.
    //if (lowercased.includes(NewCategory.toLowerCase())) return;

    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <header>
        <h1 className='titulo mt-2'> Webcams Around the World </h1>
        <hr />
      </header>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        {categories.map((category) => (
          //return <li key={ category }>{ category }</li>
          <WebcamGrid key={category} category={category} />
        ))}
    </>
  )
}

export default Webcams
