<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot'
      }"
      id="kt_login"
    >

      <!----------
          ASIDE
      ------------>
      <!-- style="background-color: #F2C98A;" -->
      <div
        class="login-aside d-flex flex-column flex-row-auto bg-primary"
      >
        <!-- <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img
              src="media/logos/logo-letter-1.png"
              class="max-h-70px"
              alt=""
            />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color: #986923;"
          >
            Discover Amazing Metronic <br />with great build tools
          </h3>
        </div> -->
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>

      <!------------
          CONTENT
      -------------->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">

          <!-----------
              SIGNIN 
          ------------->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
              @submit.stop.prevent="onSubmitLogin()"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Bienvenidos a Daraguma App
                </h3>
                <span class="text-muted font-weight-bold font-size-h4"
                  >Eres nuevo aquí?
                  <a
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder cursor-pointer"
                    @click="showForm('signup')"
                    >Crea una cuenta</a
                  ></span
                >
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >Correo electrónico</label
                >
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="email"
                    ref="email"
                    :value="form.email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >Contraseña</label
                  >
                  <!-- <a
                    class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >Forgot Password ?</a
                  > -->
                </div>
                <div
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    ref="password"
                    :value="form.password"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  class="col-sm-12 btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                >
                  <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                </button>
                <!-- <button
                  type="button"
                  class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                >
                  <span class="svg-icon svg-icon-md">
                    <inline-svg
                      src="media/svg/social-icons/google.svg"
                    /> </span
                  >Sign in with Google
                </button> -->
              </div>
            </form>
          </div>

          <!-----------
              SIGNUP
          ------------->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form"
              @submit.stop.prevent="onSubmitRegister()"
            >
              <div class="pb-10 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Registrate
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Llena el siguiente formulario para registrarte
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Nombre completo"
                  name="fullname"
                  ref="fullname"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  ref="remail"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  ref="rpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Confirmacion de contraseña"
                  name="cpassword"
                  ref="cpassword"
                  autocomplete="off"
                />
              </div>
              <!-- <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  I Agree the
                  <a href="#" class="ml-2">terms and conditions</a>.
                </label>
              </div> -->
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="col-sm-12 col-md-5 btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  <i class="fas fa-times"></i> Cancelar
                </button>
                <div class="col-sm-12 col-md-2"></div>
                <button
                  ref="kt_login_signup_submit"
                  class="col-sm-12 col-md-5 btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                >
                  <i class="fas fa-save"></i> Guardar
                </button>
              </div>
            </form>
          </div>

          <!-----------
              FORGOT 
          ------------->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

        </div>

        <!-----------
            FOOTER
        ------------->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0"
        >
          <!-- <a href="#" class="text-primary font-weight-bolder font-size-h5"
            >Terms</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Plans</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Contact Us</a
          > -->
        </div>
      </div>
      
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      // Remove this dummy login info
      form: {
        email: "randy0624@gmail.com",
        password: "123456"
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        process.env.BASE_URL + "assets/Secure.svg"
        // process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Username is required"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv1 = formValidation(signup_form, {
      fields: {
        fullname: {
          validators: {
            notEmpty: {
              message: "Full name is required"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "You should agree terms and conditions"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },

    onSubmitLogin() {
      this.fv.validate();

      this.fv.on("core.form.valid", () => {
        var email = this.form.email;
        var password = this.form.password;

        // clear existing errors
        this.$store.dispatch(LOGOUT);

        // set spinner to submit button
        const submitButton = this.$refs["kt_login_signin_submit"];
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        // dummy delay
        setTimeout(() => {
          // send login request
          this.$store
            .dispatch(LOGIN, { email, password })
            // go to which page after successfully login
            .then(() => this.$router.push({ name: "dashboard" }))
            .catch(() => {});

          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        }, 2000);
      });

      this.fv.on("core.form.invalid", () => {
        Swal.fire({
          title: "",
          text: "Please, provide correct data!",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
          heightAuto: false
        });
      });
    },

    onSubmitRegister() {
      this.fv1.validate();

      this.fv1.on("core.form.valid", () => {
        const fullname = this.$refs.fullname.value;
        const email = this.$refs.remail.value;
        const password = this.$refs.rpassword.value;

        // clear existing errors
        this.$store.dispatch(LOGOUT);

        // set spinner to submit button
        const submitButton = this.$refs["kt_login_signup_submit"];
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        // dummy delay
        setTimeout(() => {
          // send register request
          this.$store
            .dispatch(REGISTER, {
              fullname: fullname,
              email: email,
              password: password
            })
            .then(() => this.$router.push({ name: "dashboard" }))
            .catch({});

          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        }, 2000);
      });

      this.fv1.on("core.form.invalid", () => {
        Swal.fire({
          title: "",
          text: "Please, provide correct data!",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
          heightAuto: false
        });
      });
    }
  },
  destroyed(){
    this.$router.go();
  },
};
</script>
