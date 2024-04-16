import {  useState } from 'react'
import { MdEdit,MdDelete } from "react-icons/md";
import PopUp from '../components/Pop';
import {Forme} from '../components/Form';

type Country = {
  name: string
  code: string
  description: string
}
type CountryProps = {
  countries: Country[]
  setCountries:(countries:Country[])=>void

}

export const Country = ({countries, setCountries}:CountryProps) => {

  const [openForm, setOpenForm] = useState<boolean>(false)
  const [typePop, setTypePop]=useState<number>(0)
  const [index, setIndex] = useState<number>(0)
  const [isNew, setIsNew] = useState<boolean>(false)

  const togglePopUp = (type:number, index:number) => {
    setOpenForm((prev) => !prev)
    setTypePop(type)
    setIndex(index)
    setIsNew(false)
  }

  const onDelete = () => {
    const newCountries = countries.filter((_, i) => i !== index)
    setCountries(newCountries)
    setOpenForm(false)
  }

  const onSave = (country: Country) => {
    const newCountries = countries.map((c, i) => i === index ? country : c)
    setCountries(newCountries)
    setOpenForm(false)
  }

  const openNewForm = () => {
    setOpenForm(true)
    setIsNew(true)
    setTypePop(0)
  }

  const onSubmitAdd = (country: Country) => {
    const newCountries = [...countries, country]
    setCountries(newCountries)
    setOpenForm(false)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 ">

      <div className="w-1/2 flex flex-row justify-start p-4">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={openNewForm}
        >
          Add
        </button>
      </div>

      <table className='p-4 rounded-[0.5rem] overflow-hidden' >
        <thead className='bg-[#5b7cfd] text-slate-50'>
          <tr className='p-4 border-b-[#5b7cfd]'>
            <td className=' '>Name</td>
            <td className=' '>Code</td>
            <td className=' '>Description</td>
            <td className=' '>Action</td>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr className='border-b-[#5b7cfd] border-solid border hover:bg-violet-100' key={country.name}>
              <td className='  font-[600] text-gray-400'>{country.name}</td>
              <td className=' '>{country.code}</td>
              <td className=' '>{country.description}</td>
              <td className=' '>{<Action togglePopUp={togglePopUp} index={index}/>}</td>
            </tr>
          ))}
        </tbody>
      </table>


          <PopUp isOpen={openForm} close={() => setOpenForm(false)}>
            {
              typePop == 0 ? 
              <Forme country={countries[index]} onClose={() => setOpenForm(false)} onSave={onSave} newForm={isNew} onAdd={onSubmitAdd} /> 
              : <Delete onDelete={onDelete} onDiscard={()=>setOpenForm(false)}/>
            }
          </PopUp>
    </div>
  )

}

const Delete =({onDelete, onDiscard}:{onDelete:()=>void, onDiscard:()=>void})=>{
  return (
    <div className='flex flex-col items-center justify-around w-[20rem] h-[10rem]'>
      <p>Are you sure to delete this item?</p>
      <div className='w-full flex flex-row justify-around'>
        <button className='bg-red-500 text-white rounded px-4 py-2' onClick={onDiscard} >Discard</button>
        <button className='bg-blue-500 text-white rounded px-4 py-2' onClick={onDelete}>Confirm</button>
      </div>
    </div>
  )
}


const Action = ({togglePopUp, index}:{togglePopUp:(id:number, index:number)=>void, index:number})=> {
  return (
    <div className='flex flex-row items-center justify-between w-[4rem]'>
      <MdEdit size={30} color='#fff' 
              className="cursor-pointer bg-blue-600 rounded p-2 " 
               onClick={() => togglePopUp(0, index)}
               />
      <MdDelete size={30} color='#fff'
               className="cursor-pointer bg-red-500 rounded p-2 " 
               onClick={() => togglePopUp(1, index)}
               />
    </div>
  )
}

