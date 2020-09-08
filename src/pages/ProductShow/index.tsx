import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { Header, Form, Title, Description, ButtonEdit, ButtonDelete } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
}

interface ProductParams {
  id: string;
}

const ProductShow: React.FC = () => {
  const history = useHistory();
  const [product, setProduct] = useState<Product | undefined>();
  const { params } = useRouteMatch<ProductParams>();

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  useEffect(() => {
    api.get(`/product/${params.id}`).then(response => {
      setProduct(response.data);
    }).catch(Error => {
      history.push('/product');
    });
  }, [params.id]);

  async function handleDeleteProduct(product_id: Number){
    try{
      await api.delete(`/product/${product_id}`);
      history.push('/product');

    } catch(error){
        return error;
    }

  }

  return (
    <>
    <Header>
      <Link to="/product">
        <FiChevronLeft size={30}/>
        Voltar
      </Link>
    </Header>

    <Title>Controle de Estoque de Produtos</Title>

    <Form>
        <div>
          {product && (
              <header>
                <img src={imageBox} alt="imagem"/>
                  <Description>
                    <strong>{product.name}</strong>
                    <p><b>Preço: </b>{formatter.format(product.price)}</p>
                    <p><b>Descrição: </b>{product.description}</p>
                  </Description>
              </header>
          )}
          {product && (
            <Link to={`/product-edit/${product.id}`}>
              <ButtonEdit type="submit"> Editar </ButtonEdit>
            </Link>
          )}
          {product && (
            <form onClick={() => handleDeleteProduct(product.id)} >
              <ButtonDelete type="submit"> Deletar </ButtonDelete>
            </form>
          )}
        </div>
    </Form>
    </>
  );
}

export default ProductShow;