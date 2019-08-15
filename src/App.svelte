<script>
    import { Router, Route } from 'svero';

    import Index from './pages/Index.svelte';
    import Commands from './pages/Commands.svelte';
    import Sidenav from './components/Sidenav.svelte';
</script>

<Router>
    <Route exact path="/" component={Index}/>
    <Route exact path="/#" component={Index}/>
    <Route exact path="/commands" component={Commands}/>
    <Route path="/side" component={Sidenav}/>
    <Route fallback path="*"><h1>404 :)</h1></Route> 
</Router>