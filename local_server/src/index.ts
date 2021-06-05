import 'dotenv/config';

import { app } from 'core_app';

app.listen(process.env.PORT || 4000, (err) => {
    if (err) throw err;
    // Server is now listening on ${address}
});
