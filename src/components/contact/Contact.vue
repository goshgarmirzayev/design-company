<template>
    <section id="contact">
        <div class="container">
            <h2><b>Bizə yazın</b></h2>
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <div class="row">
                            <div class="form-group col-lg-6">
                                <label for="name">Ad</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="email">E-ünvan</label>
                                <input type="email" class="form-control" id="email" name="email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="content">Mövzu</label>
                            <input type="text" class="form-control" id="content" name="content">
                        </div>
                        <div class="form-group">
                            <label for="message">Mesaj</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                        </div>
                        <!-- Capthca Elave edilmelidi ne zamansa -->
                        <!-- <div class="row">

                            <div class="form-group col-md-4">
                                <input type="text" class="form-control" id="captcha" name="captcha">
                            </div>
                            <div class="col-3">
                                <img src="@/assets/img/chaptcha.PNG">
                            </div>

                        </div> -->
                        <button type="submit" class="btn btn-danger my-3">Göndər</button>
                    </form>
                </div>
                <div class="col-md-6 ">
                    <iframe class="embed-responsive border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.591830477266!2d49.83134711477025!3d40.37357397937015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dba37288d53%3A0x838886d98bff019a!2sideart.az!5e0!3m2!1str!2s!4v1609331201808!5m2!1str!2s"
                        frameborder="0" marginheight="0" height="300px" width="400px" marginwidth="0" aria-hidden="false" tabindex="0"></iframe>
                    <p>Ofis</p>
                    <ul class="contact-info list-unstyled">
                        <li><span><i class="fa fa-map-marker-alt"></i></span> Ofis: Babək prospekti 10, Bakı AZ1000, Azərbaycan</li>
                        <li><span><i class="fa fa-phone-alt"></i></span> Tel: (+99412) 464 16 23</li>
                        <li><span><i class="fa fa-mobile-alt"></i></span> Моbil: (+99477)744 00 66</li>
                        <li><span><i class="fa fa-envelope"></i></span> Poçt: office@ideart.az; advert@ideart.az</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {
    
}
</script>