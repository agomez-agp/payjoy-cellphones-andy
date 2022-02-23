let cellphones = [
    {
        "Model": "Moto G30",
        "photo": "moto-g30.jpg",
        "screen": "00000000000",
        "process": "00000000000",
        "ram": "00000000000",
        "memoryStore": "00000000000",
        "camera": "00000000000",
        "battery": "00000000000",
        "os": "Android "
    },
    {
        "Model": "Moto G31",
        "photo": "moto-g31.jpg",
        "screen": "00000000000",
        "process": "00000000000",
        "ram": "00000000000",
        "memoryStore": "00000000000",
        "camera": "00000000000",
        "battery": "00000000000",
        "os": "Android "
    },
    {
        "Model": "Moto G60",
        "photo": "moto-g60.jpg",
        "screen": "00000000000",
        "process": "00000000000",
        "ram": "00000000000",
        "memoryStore": "00000000000",
        "camera": "00000000000",
        "battery": "00000000000",
        "os": "Android "
    }
]

cellphones.forEach(function(val, index) {
    let list = `
    <br>
    <div class="col-sm">

    <section class='cell-phone-image'>
        <img src='img/${val.photo}' alt='Moto G60' width='300'>
    </section>

    <section class='detail-cellphone'>
        <ul class='fa-ul' id='cellphones-list'>
        <li><span data-toggle='tooltip' title='Pantalla y resolución'><i class='fa-li fa fa-mobile fa-lg'></i><strong>Pantalla: ${val.screen}</strong></span></li>		      
        <li><span data-toggle='tooltip' title='Procesador'><i class='fa-li fa fa-tachometer'></i>  <strong>Procesador:  ${val.process}</strong></span></li>		      
        <li><span data-toggle='tooltip' title='Memoria RAM'><i class='fa-li fa fa-cogs'></i>  <strong>RAM:  ${val.ram}</strong></span></li>
        <li><span data-toggle='tooltip' title='Almacenamiento'><i class='fa-li fa fa-microchip'></i>  <strong>Almacenamiento:  ${val.memoryStore}</strong></span></li>				  
        <li><span data-toggle='tooltip' title='Cámara'><i class='fa-li fa fa-camera'></i><strong>Cámara:  ${val.camera}</strong></span></li>				
        <li><span data-toggle='tooltip' title='Batería'><i class='fa-li fa fa-battery'></i>  <strong>Batería:  ${val.battery}</strong></span></li>					
        <li><span data-toggle='tooltip' title='Sistema operativo'><i class='fa-li fa fa-code'></i>  <strong>OS: Android  ${val.os}</strong></span></li>	
        </ul>
    </section>

    </div>
    <hr>
    <br>
    `

    $("#body-phone").append(list);

});
