<template>
  <div>
    <Form v-slot="{ errors }">
      <div class="mb-3">
        <label for="email" class="form-label">Example label</label>
        <Field type="email" class="form-control" id="email" placeholder="Example input placeholder" name="email" rules="email|required" :class="{ 'is-invalid': errors['email'] }"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <button type="submit">送出</button>
    </Form>
  </div>
</template>
