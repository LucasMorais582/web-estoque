import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Title, Products, Button } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | any>([]);

  useEffect(() => {
    api.get<Product[]>('product').then(response => {
      setProducts(response.data);
  });
  }, []);

  return (
    <>
      <Title>Controle de Estoque de Produtos</Title>
      <Link to={`/product-create`}>
        <Button type="submit"> Cadastrar Novos Produtos </Button>
      </Link>
      <Link to={`/category`}>
        <Button type="submit"> Ver Categorias </Button>
      </Link>
      <Products>
        {products.map((product: Product) => (
          <Link key={product.id}  to={`/product/${product.id}`}>
            <img src={imageBox} alt="Imagem"/>
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
            <BsSearch size={20} />
          </Link>
        ))}
      </Products>
    </>
  )
}

export default ProductList;