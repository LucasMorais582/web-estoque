import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { Header, Product, Title, Data } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  price: any;
  category_id: number;
}

interface ProductParams {
  id: string;
}

const ProductEdit: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<ProductParams>();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    api.get(`/product/${params.id}`).then(response => {
      setProduct(response.data);
      setCategory(response.data.category_id);
    });

  }, [params.id]);

  async function handleUpdateProduct(e: { preventDefault: () => void; }){
    e.preventDefault();

    const data = {
      name: name ? name : product?.name,
      price: parseFloat(price) ? parseFloat(price): product?.price,
      description: description ? description : product?.description,
      category_id: parseInt(category)
    };

    try{
      await api.patch(`/product/${product?.id}`, data);
      history.push('/');

    } catch(error){
        return error;
    }

  }

  return (
    <>
    <Header>
      <Link to="/">
        <FiChevronLeft size={30}/>
        Voltar
      </Link>
    </Header>

    <Title>Edição de Produto</Title>

    <Product>
    {product && (
          <div>
            <header>
              <img src={imageBox} alt="Imagem"/>
              <Data>
                <p>Nome <textarea onChange={ e => setName(e.target.value)}>{product.name}</textarea></p>
                <p>Preço <textarea onChange={ e => setPrice(e.target.value)} >{product.price}</textarea></p>
                <p>Descrição <textarea onChange={ e => setDescription(e.target.value)}>{product.description}</textarea></p>
              </Data>
            </header>
            <form onSubmit={ handleUpdateProduct }>
              <button type="submit"> Salvar </button>
            </form>
        </div>
      )}
    </Product>
    </>
  );
}

export default ProductEdit;