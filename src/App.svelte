<script>
    import { Router, Route } from 'svero';

    import Index from './pages/Index.svelte';
    import Commands from './pages/Commands.svelte';
</script>

<Router>

    <Route exact path="/" component={Index}/>
    <Route exact path="/#" component={Index}/>
    <Route path="/commands" component={Commands} />
    <Route fallback path="*"></Route> 
</Router>