import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Header, Product, Title, Description, Error, Option, Select } from './styles';
import api from '../../services/api';
import imageBox from '../../assets/caixas.jpg';

interface Category {
  id: number;
  name: string;
}

const ProductCreate: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<String | any>('');
  const [categories, setCategories] = useState<Category[] | any>([]);

  const [inputErrorName, setinputErrorName] = useState('');
  const [inputErrorPrice, setinputErrorPrice] = useState('');
  const [inputErrorCategory, setinputErrorCategory] = useState('');
  const [inputErrorDescription, setinputErrorDescription] = useState('');

  useEffect(() => {
    api.get<Category[]>(`category`).then(response => {
      setCategories(response.data);
    });

  }, []);

  async function handleCreateProduct(e: { preventDefault: () => void; }){
    e.preventDefault();

    if(!name)
      setinputErrorName('Informe o nome do produto.');
    else
      setinputErrorName('');

    if(!price)
      setinputErrorPrice('Informe o preço do produto.');
    else
    setinputErrorPrice('');

    if(!category)
      setinputErrorCategory('Selecione a categoria do produto.');
    else
      setinputErrorCategory('');

    if(!description)
      setinputErrorDescription('Informe a descrição do produto.');
    else
      setinputErrorDescription('');

    if(!name || !price || !category || !description) return;

    const data = { name, price: parseFloat(price), description, category_id: parseInt(category)};

    try{
      setinputErrorName('');
      setinputErrorPrice('');
      setinputErrorCategory('');
      setinputErrorDescription('');

      await api.post(`product`, data);
      history.push('/product');
    } catch(error){
        console.log(error);
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

    <Title>Cadastro de Produto</Title>

    <Product>
          <div>
            <header>
              <img src={imageBox} alt="Imagem"/>
              <Description>
                <p>Categoria</p>
                  <Select name="categories" id="categories" onChange={ e => setCategory(e.target.value)}>
                    <Option></Option>
                    {categories.map((index: Category) => (
                      <Option key={index.id} value={index.id}>{index.name}</Option>
                    ))}
                  </Select>
                    {inputErrorCategory && <Error>{inputErrorCategory}</Error>}

                <p>Nome <textarea onChange={ e => setName(e.target.value)}></textarea></p>
                  {inputErrorName && <Error>{inputErrorName}</Error>}

                <p>Preço <textarea onChange={ e => setPrice(e.target.value)}></textarea></p>
                  {inputErrorPrice && <Error>{inputErrorPrice}</Error>}

                <p>Descrição <textarea onChange={ e => setDescription(e.target.value)}></textarea></p>
                  {inputErrorDescription && <Error>{inputErrorDescription}</Error>}
              </Description>
            </header>
            <form onSubmit={ handleCreateProduct }>
              <button type="submit"> Salvar </button>
            </form>
        </div>
    </Product>
    </>
  );
}

export default ProductCreate;