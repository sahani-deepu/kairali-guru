const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://riivtioklmmlkkatvoqc.supabase.co';
const supabaseAnonKey = 'sb_publishable_dzEYdAFrxl6HBRqnOYgJrg_1u04KIdZ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log('Testing Supabase Connection...');
  const { data, error } = await supabase
    .from('enquiries')
    .insert([
      {
        name: 'Connection Test',
        email: 'test@kairali.guru',
        country: 'India',
        programme: 'oap',
        phone: '1234567890',
        language: 'en',
        location: 'either',
        message: 'testing connections'
      }
    ]);

  if (error) {
    console.error('Supabase API Error:', error);
  } else {
    console.log('Success! Data:', data);
  }
}

test();
