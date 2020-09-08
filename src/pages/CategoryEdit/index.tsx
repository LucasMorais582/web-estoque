import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { Header, Category, Title, Data } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Category {
  id: number;
  name: string;
}

interface CategoryParams {
  id: string;
}

const CategoryEdit: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<CategoryParams>();

  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category | any>('');

  useEffect(() => {
    api.get(`/category/${params.id}`).then(response => {
      setCategory(response.data);
    });

  }, [params.id]);

  async function handleUpdateCategory(e: { preventDefault: () => void; }){
    e.preventDefault();

    const data = {
      name: name ? name : category.name,
    };

    try{
      await api.put(`/category/${category.id}`, data);
      history.push('/category');

    } catch(error){
        return error;
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

    <Title>Edição de Categoria</Title>

    <Category>
    {category && (
          <div>
            <header>
              <img src={imageBox} alt="Imagem"/>
              <Data>
                <p>Nome <textarea onChange={ e => setName(e.target.value)}>{category.name}</textarea></p>
              </Data>
            </header>
            <form onSubmit={ handleUpdateCategory }>
              <button type="submit"> Salvar </button>
            </form>
        </div>
      )}
    </Category>
    </>
  );
}

export default CategoryEdit;