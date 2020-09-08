import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Header, Category, Title, Description, Error } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Category {
  id: number;
  name: string;
}

const CategoryCreate: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [inputErrorName, setinputErrorName] = useState('');

  async function handleCreateCategory(e: { preventDefault: () => void; }){
    e.preventDefault();

    if(!name){
      setinputErrorName('Informe o nome da categoria.');
      return;
    }

    try{
      setinputErrorName('');

      await api.post(`category`, { name });
      history.push('/category');
    } catch(error){
        console.log(error);
    }

  }

  return (
    <>
    <Header>
      <Link to="/category">
        <FiChevronLeft size={30}/>
        Voltar
      </Link>
    </Header>

    <Title>Cadastro de Categoria</Title>

    <Category>
          <div>
            <header>
              <img src={imageBox} alt="Imagem"/>
              <Description>
                <p>Nome <textarea onChange={ e => setName(e.target.value)}></textarea></p>
                  {inputErrorName && <Error>{inputErrorName}</Error>}
              </Description>
            </header>
            <form onSubmit={ handleCreateCategory }>
              <button type="submit"> Salvar </button>
            </form>
        </div>
    </Category>
    </>
  );
}

export default CategoryCreate;