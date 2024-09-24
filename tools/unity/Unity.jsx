import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Forms from 'components/forms';
import Spinner from 'components/loaders/spinner/spinner';
import {
  getConfig,
  saveConfigForm,
  updateConfig,
  useGetConfigQuery,
} from 'services/config/config.service';
import { resetClientFormValues } from 'services/config/config.slice';

const Unity = () => {
  const dispatch = useDispatch();
  const { data, isLoading: isConfigLoading } = useGetConfigQuery('unity');

  const formValues = useSelector(state => state.config.unity.formValues);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const isLoading = useSelector(state => state.config.isLoading);

  const { id } = useParams();
  useEffect(() => {
    return () => {
      dispatch(resetClientFormValues({ client: 'unity' }));
    };
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getConfig({ id, client: 'unity' }));
    }
  }, [id]);

  const onSubmit = async values => {
    let action = saveConfigForm({
      formValues: { ...values },
      client: 'unity',
      schemaId: data.id,
    });
    if (id) {
      action = updateConfig({
        configId: id,
        formValues: { ...values },
        client: 'unity',
        schemaId: data.id,
      });
    }
    dispatch(action)
      .unwrap()
      .then(payload => {
        const { schemaId } = payload;
        if (schemaId) {
          navigate(`/config-mgmt/unity`);
        }
      })
      .catch(rejectedValue => {
        enqueueSnackbar(rejectedValue, {
          variant: 'error',
        });
      });
  };

  return (
    <div className='flex w-full h-full'>
      {data && data.fieldsMetadata && (
        <div className='w-4/5 mx-auto h-[90%] bg-unity bg-[length:110%_110%] bg-no-repeat shadow-xl shadow-gray-500 rounded-2xl relative mt-9 '>
          <Forms
            config={data}
            initialValues={formValues}
            onSubmitClient={onSubmit}
          />
        </div>
      )}
      {(isLoading || isConfigLoading) && <Spinner />}
    </div>
  );
};

export default Unity;

