const { createClient } = require('@supabase/supabase-js');
try {
  const client = createClient('https://riivtioklmmlkkatvoqc.supabase.co', 'sb_publishable_dzEYdAFrxl6HBRqnOYgJrg_1u04KIdZ');
  console.log('Client created successfully!');
} catch (e) {
  console.error('Error during client creation:', e.message);
}
