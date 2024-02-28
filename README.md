## Deployment

Running as development
[Link deployment](https://loyaute.rdev.space/)

## Login

email: (random but must valid email)
password: "valid"

`/src/mocks/browser.tsx`

## Technologies

- Typescript
- Vite
- React
- Redux-Toolkit
- MSW

## Folder structure

```
src
  app         // Redux configuration
  asset       // Static asset for vite builder
  components  // React components
    common    // Molecules componetn (Header/Footer)
    icon      // SVG element
    ui        // Primitive components
    views     // Page component
    [$domain] // Reusable component referenced by domain/feature
  features
    [$domain] // Grouping logic like API, Redux slice and DTO by domain
  mocks
    [handler] // Handler mock for speeding development (MSW)
  pages       // Routing based on folder referefenced by routes.tsx
  utils       // Reusable function

```
