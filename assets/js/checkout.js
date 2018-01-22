jQuery(document).ready( function ( $ ) {
  'use strict';
	var eu_countries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];
	var tax_id_countries = ['BE', 'DE', 'ES', 'IT', 'SK']

	$('#billing_country').change(function() {
	  // show vat number if buyer is in the EU
	  if ( $(this).val() == $('#base_location').val() || $.inArray($(this).val(), eu_countries) == -1 ) {
	    $('#vat_number_field').hide();
	    $('#vat_number').val('');
	  } else {
	    $('#vat_number_field').show();
	  }

    // show tax id field if vendor and buyer are in the same country
	  if ( $(this).val() == $('#base_location').val() && $.inArray($(this).val(), tax_id_countries) != -1 ) {
	    $('#tax_id_field').addClass('validate-required').show();
	    if ( $('#tax_id_field label abbr').length == 0 ) {
		    $('#tax_id_field label').append(' <abbr class="required" title="required">*</abbr>');
	    }
	  } else {
	    $('#tax_id_field label abbr').remove();
	    $('#tax_id_field').removeClass('validate-required').hide();
	    $('#tax_id').val('');
	  }
	});

	$('#billing_postcode').change(function () {
	  $('body').trigger('update_checkout');
	});

	$('#vat_number').change(function() {
		$('body').trigger('update_checkout');
	});

} );