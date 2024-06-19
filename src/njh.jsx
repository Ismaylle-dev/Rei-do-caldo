react {
    
}
login const = () => {
    const [nome de usuário, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [erro, setError] = useState(null);
   
    const handleSubmit = (evento) => {
    event.preventDefault();
    // Chame a API ou autentique o usuário aqui
    if (nome de usuário === 'admin' && senha === 'senha') {
    // Login bem-sucedido, redirecionamento para painel ou qualquer outra coisa
    console.log('Login bem sucedido!');
    } outro {
    setError('Nome de usuário ou senha inválidos');
    }
    };
   
    retornar (
    <div>
    <h2>Entrar</h2>
    <formulário onSubmit={handleSubmit}>
    <rótulo>
    Nome de usuário:
    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
    </label>
    <br />
    <rótulo>
    Senha:
    <input type="senha" valor={senha} onChange={(evento) => setPassword(event.target.value)} />
    </label>
    <br />
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <button type="submit">Login</button>
    </form>
    </div>
    );
   };