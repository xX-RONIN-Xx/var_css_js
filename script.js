document.addEventListener('DOMContentLoaded',e=>{
    const   inputs=document.querySelectorAll('.controls input');
    inputs.forEach(el => {
        el.addEventListener('change', handleUpdate)
    });

    inputs.forEach(el => {
        el.addEventListener('mousemove', evento)
    });

    function evento(){
        const suffix=this.dataset.sizing||'';//aca se usa el dataset, que una propiedad definida por el programador, en el html es data- 
                                            //y el nombre de la propiedad, en este caso sizing
        document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
    }

    function handleUpdate(){
        const suffix=this.dataset.sizing||'';//las commilas son para el caso del color, esa propiedad no lleva ningun sufijo, asi la constante sirve para cualquier input
        document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
        //luego las 2 funciones se ejecutan al mismo tiempo, pero de esta manera los valores se actualizan mientras vamos cambiando el valor del input range, 
        //en vez de cambiar solo cuando soltamos el mouse
    }
})
