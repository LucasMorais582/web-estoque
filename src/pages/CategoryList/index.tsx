import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Categories, Button, Header } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Category {
  id: number;
  name: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[] | any>([]);

  useEffect(() => {
    api.get<Category[]>('category').then(response => {
      setCategories(response.data);
  });
  }, []);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={30}/>
          Voltar
        </Link>
      </Header>

      <Title>Controle de Estoque de Produtos</Title>

      <Link to={`/category-create`}>
        <Button type="submit"> Cadastrar Novas Categorias </Button>
      </Link>
      <Categories>
        {categories.map((category: Category) => (
          <Link key={category.id}  to={`/category/${category.id}`}>
            <img src={imageBox} alt="Imagem"/>
            <div>
              <strong>{category.name}</strong>
            </div>
            <BsSearch size={20} />
          </Link>
        ))}
      </Categories>
    </>
  )
}

export default CategoryList;