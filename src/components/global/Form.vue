<template>
  <div class="flex flex-wrap pt-12 xl:pt-0 lg:pt-0  justify-center xl:flex-nowrap lg:flex-nowrap max-w-6xl mx-auto pb-5">
    <div class="icons w-full xl:w-1/2 lg:w-1/2">
      <div class="flex pl-6 xl:pl-0 lg:pl-0 xl:justify-center lg:justify-center mt-2 xl:mt-16 lg:mt-16 xl:pt-0 lg:pt-0">
          <ContactDetails/>
      </div>
    </div>
    <div class="xl:w-1/2 lg:w-1/2">
     <Form  action="https://formsubmit.co/info@burtula.com" method="POST">
      <div class="flex flex-wrap justify-between p-7 xl:ml-5 lg:ml-5">
        <div class="w-1/2  my-2 pr-2">
          <Field name="name" type="text" placeholder="Name"  :rules="isRequired" class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none mark-geo-light"></Field>
          <ErrorMessage name="name" class="text-red-500 text-sm relative top-1 mark-geo-light" />
        </div>
        <div class="w-1/2 my-2 pl-2">
          <Field name="email" type="email" placeholder="Mail"  :rules="validateEmail" class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none mark-geo-light"></Field>
          <ErrorMessage name="email" class="text-red-500 text-sm relative top-1 mark-geo-light" />
        </div>
        <div class="w-full my-2">
          <Field name="_subject" type="text" placeholder="Subject"  :rules="isRequired" class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none mark-geo-light"></Field>
          <ErrorMessage name="_subject" class="text-red-500 text-sm relative top-1 mark-geo-light" />
        </div>
        <input type="hidden" name="_next" value="http://localhost:8080/email"> 
        <div class="w-full my-2">
         <Field name="message" as="textarea" type="textarea" placeholder="Text"  :rules="isRequired" class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none h-40 mark-geo-light"></Field>
         <ErrorMessage name="message" class="text-red-500 text-sm relative top-1 mark-geo-light" />
        </div>
        <div class="flex xl:justify-end xl:w-full lg:justify-end w-full">
            <BaseButton 
                class="mt-1 p-3"
                :color="'#FFFFFF'"
                :backgroundColor="'#EE3A25'"
                :width="'100%'"
                :borderRadius="'5px'"
                >
                <p class="uppercase mark-geo-bold">Send</p>
            </BaseButton>
        </div>
      </div>
    </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage} from 'vee-validate';
import BaseButton from '@/components/global/BaseButton'
import ContactDetails from '@/components/global/contactDetails'
export default {
  components: {
    BaseButton,
    ContactDetails,
    Form, 
    Field,
    ErrorMessage
  },

  data(){
      return{
          responsehtml:''
      }
  },

  methods:{
/* */

    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },

  isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return 'This is required';
    },
  }
};
</script>