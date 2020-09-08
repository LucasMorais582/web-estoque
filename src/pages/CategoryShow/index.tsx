import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { Header, Form, Title, Description, ButtonEdit, ButtonDelete } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Category {
  id: number;
  name: string;
}

interface CategoryParams {
  id: string;
}

const CategoryShow: React.FC = () => {
  const history = useHistory();
  const [category, setCategory] = useState<Category | undefined>();
  const { params } = useRouteMatch<CategoryParams>();

  useEffect(() => {
    api.get(`/category/${params.id}`).then(response => {
      setCategory(response.data);
    }).catch(Error => {
      history.push('/category');
    });
  }, [params.id]);

  async function handleDeleteCategory(category_id: Number){
    try{
      await api.delete(`/category/${category_id}`);
      history.push('/category');

    } catch(error){
        return (error);
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

    <Title>Controle de Estoque de Produtos</Title>

    <Form>
        <div>
          {category && (
              <header>
                <img src={imageBox} alt="imagem"/>
                  <Description>
                    <strong>{category.name}</strong>
                  </Description>
              </header>
          )}
          {category && (
            <Link to={`/category-edit/${category.id}`}>
              <ButtonEdit type="submit"> Editar </ButtonEdit>
            </Link>
          )}
          {category && (
            <form onClick={() => handleDeleteCategory(category.id)}>
              <ButtonDelete type="submit"> Deletar </ButtonDelete>
            </form>
          )}
        </div>
    </Form>
    </>
  );
}

export default CategoryShow;