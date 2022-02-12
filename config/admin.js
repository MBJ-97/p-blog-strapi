module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb259cff3b958a6599a9fa6cdaaed9f4'),
  },
});
