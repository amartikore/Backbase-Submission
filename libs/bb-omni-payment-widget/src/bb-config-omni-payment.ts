import {
    CounterPartyFields,
    FormFieldHooksParams,
    InitiatorFields,
    PaymentBaseFields,
    PaymentComponents,
    PaymentFormGroup,
    PaymentHooksParams,
    PaymentTypeConfig,
    RemittanceInfoFields  
} from '@backbase/payment-orders-ang';
  
  let merchantField: any = {};

  const merchantNumber: PaymentFormGroup = {
    name: PaymentBaseFields.remittanceInfo,
    title: 'Additioanl Payment Details',
    fields: [
      {
        type: PaymentComponents.number,
        name: RemittanceInfoFields.paymentReference,
        options: {
          label: 'Merchant Number',
          placeholder: 'Specify merchant number',
          validationMessages: [
            {
              name: 'required',
              message: "Merchant number can't be blank"
            }
          ]
        },
        hooks: {
          onInit({ component, control, group }: FormFieldHooksParams) {
            merchantField = component;
          }     
        }       
      },
           
    ],  
  };

  const initiator: PaymentFormGroup = {
    name: PaymentBaseFields.initiator,
    title: 'From',
    fields: [
      {
        type: PaymentComponents.debitAccountSelector,
        name: InitiatorFields.initiatorAccountGroup,
        options: {
          placeholder: 'Select an account',
          
        },
      },
    ],
  };

  const counterParty: PaymentFormGroup = {
    name: PaymentBaseFields.counterparty,
    title: 'To',
    fields: [
      {
        name: CounterPartyFields.name,
        type: PaymentComponents.beneficiarySelector,
        options: {
          placeholder: 'Select a beneficiary',
          saveNewContactLabel: 'Save as a new contact',
        },
      },  
    ],
  };
 
  const remittanceInfo: PaymentFormGroup = {
    name: PaymentBaseFields.remittanceInfo,
    title: 'Payment details',
    fields: [
      {
        type: PaymentComponents.amount,
        name: RemittanceInfoFields.amountCurrencyGroup,
        options: {
          label: 'Amount',
          currencies: ['EUR'],
        },
      },
      {
        name: RemittanceInfoFields.description,
        type: PaymentComponents.textarea,
        options: {
          label: 'Description',
          placeholder: 'Enter payment description',
          showCharCounter: true,
          minLength: 0,
          rows: 3,
          maxLength: 140,
          cols: 50,
        },
      },
      
    ],  
  };
      
  export const SEPA: PaymentTypeConfig = {
    name: 'Custompayment',
    paymentType: 'SEPA_CREDIT_TRANSFER',
    fields: [initiator,counterParty,remittanceInfo,merchantNumber],
    hooks: {
        onSave(params: PaymentHooksParams | any) {
          if (params) {
            if(merchantField.control.value === null || merchantField.control.value === '' ) {
              params?.form?.get('remittanceInfo')['controls'].paymentReference.setErrors({required : true});
              params.doneFn(false);                            
            } else {
              params.doneFn();
            }            
          }
        }       
      }
    };