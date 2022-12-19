import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Provider store ={store}>
        <ToastContainer/>
        <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/temas' element={<ListaTema />} />
                <Route path='/postagem' element={<ListaPostagem />} />
                <Route path='/cadastrousuario' element={<CadastroUsuario />} />
                <Route path="/formularioPostagem" element={<CadastroPost />} />
                <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
                <Route path="/formularioTema" element={<CadastroTema />} />
                <Route path="/formularioTema/:id" element={<CadastroTema />} />
                <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                <Route path="/deletarTema/:id" element={<DeletarTema />} />
                </Routes>
                </div>
            <Footer />
        </Router>
        </Provider>
    );
}
export default App;