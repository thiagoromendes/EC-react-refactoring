import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import {useStyles} from './styles'
import {GenericHeader} from '../GenericHeader';
import {GenericTextField} from '../GenericTextField';
import {configTextField} from './config';
import api from '../../service/api';

export function RefactoredForm() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const classes = useStyles();

  const onSubmit = handleSubmit(data => api.post('/form', data));

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      className={classes.paper}
    >
        <GenericHeader 
          className={classes.avatar}
          icon="smile"
          title="Refactored Form"
        />
        <form 
          onSubmit={onSubmit}
          className={classes.form} 
          noValidate
        >
          <Grid container spacing={2}>
            <GenericTextField 
              config={configTextField}
              firstName={{...register("firstName")}}
              lastName={{...register("lastName")}}
              email={{...register("email")}}
              phone={{...register("phone")}}
              password={{...register("password")}}
              errors={{errors}}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
    </Container>
  );
}