<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
  const username = ref(null)

function login(){
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    if(username.value == userDetails.email && password.value == userDetails.password){
        //proceed to homepage
        localStorage.setItem("isLoggedIn", true );
        router.push('/homepage')
    }else{
        console.log('Invalid credentials. Try again!')
    }
}

</script>

<template>
    <v-container width="50%" class="text-center mt-12" style="background-color:">
        <v-row>
            <v-col md="12">
                <v-form>
                    <v-row>
                        <v-col md="12">
                            <v-icon color="#A6AD1E" icon="mdi-weight-lifter" size="large" class="mb-4 pa-6"></v-icon>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div class="text-display-medium font-weight-medium ">Sign in to MacFit Gym</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right ">Username</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="username"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right ">Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field 
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="show1 = !show1"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="#A6AD1E" @click="login">Log in</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <div>New to MacFit Gym?
                                <router-link to ="/signup"> Create an account</router-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>