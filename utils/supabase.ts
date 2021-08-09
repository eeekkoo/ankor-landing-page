import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mnseizbodcoytxvmnfhh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODUxODQ0MCwiZXhwIjoxOTQ0MDk0NDQwfQ.SdJOmnolrLJpx5XOGt80IQ-XE2Za4THsGMZlQXpDVhc';
export const supabase = createClient(supabaseUrl, supabaseKey);
