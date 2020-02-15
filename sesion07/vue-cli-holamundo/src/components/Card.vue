<template>
    <div class="card">
        <div class="imgBox">
            <img src="../assets/images.jpeg" alt="">
           <!-- <img src="data:image/jpeg;base64,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WQx1o7yxBgZOLmORuTZLePTOOw+VGcx0jNZtpRonPQG7hrxX5srRzegPHiHry4EoqAXvQUUk8jYoml73GwaPpPADeTkFIaOaNz1zrRNswHnSOyY3t8Y+aPk2rTaGkhwwCnpWcvWSC5vkbeXM4foowdg37rnNBzYPhEeERt5vL10/NYxu0naWsJ8GMbXPP4BfuLYo3Co3SyOE1dOMzuAGwAbWxN3Da49pHnjGMR4UHOe4VFfMOc47GjcLfs4huaM3beJGXV1bJPI6WVxe9xuXH7OAGwAbER81dS+V7pJHFz3m7nHaT/3cvJERRERAREQEREBERAREQEREBERAREQEREBERAQG2YyIzB3gjeERBoGAaZRVEYpcSFxlqT5ghw8EvIzY4bpB27ybj31LSttUXqaUjKcNDntYR/qWNHPbb9o0dY3rDlYNGtL6ih5rTrxb4nE2+IdrD1ZdBRGnRYg+paIsPaIoBl3y5mrGBwpoyBrnzjZo6VV8Z0sgoGugoPdJXG8tS465L97i4/pHfNG6+xV/SbTaorQWD3GH92w5uHvjstYdFgOgqsoPuaVz3F73FznG5cTckneSdq+ERFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==" alt="">-->
        </div>
        <div class="content">
            <div>
                <h2>Technology</h2>
                <p>Lorem ipsum dolor sit chingadera de palabras para dar relleno a la pagina y asi tener texto con que trabajar.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        background: #fff;
    }
    .imgBox{
        position:relative;
        width: 250px;
        height: 250px;
        background: #000;
    }
    .imgBox img{
        position: absolute;
        border-radius: 50%;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        object-fit:cover;
    }
    .content{
        position: relative;
        width: 250px;
        height: 250px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .content div{
        padding: 20px;
        text-align: center;
    }
    @media (max-width: 1000px) {
        .card{
            flex-direction: row;
            margin: 10px 0;
        }
        .imgBox, .content{
            width: 50%;

        }
    }
    @media (max-width: 600px) {
        .card{
            flex-direction: column;
            margin: 10px 0;
        }
        .imgBox, .content{
            width: 100%;
        }
        .content{
            height: 200px;
        }
    }
</style>