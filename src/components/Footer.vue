<template>
<div>
<footer class="section bg-footer">
        <div class="container">




                <div class="col-12">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h6>
                        <div class="mt-5">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        

        
         
        
    </footer>
    </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.bg-footer {
  background-color: #33383c;
  padding: 50px 0 30px;
  text-align: center;
}
.footer-heading {
  letter-spacing: 2px;
}

.footer-link a {
  color: #acacac;
  line-height: 40px;
  font-size: 14px;
  transition: all 0.5s;
}

.footer-link a:hover {
  color: #1bbc9b;
}

.contact-info {
  color: #acacac;
  font-size: 14px;
}

.footer-social-icon {
  font-size: 15px;
  height: 34px;
  width: 34px;
  line-height: 34px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
}

.facebook {
  background-color: #4e71a8;
  color: #ffffff;
}

.twitter {
  background-color: #55acee;
  color: #ffffff;
}

.google {
  background-color: #d6492f;
  color: #ffffff;
}

.apple {
  background-color: #424041;
  color: #ffffff;
}

.footer-alt {
  color: #acacac;
}

.footer-heading {
  position: relative;
  padding-bottom: 12px;
}

.footer-heading:after {
  content: "";
  width: 90%;
  border-bottom: 1px solid #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  border-bottom: 1px solid #000;
}
</style>