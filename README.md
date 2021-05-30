# FHIR Medication App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Adatmodell

### Medication
| Név | Kötelező | Típus | Leírás | Egyéb
| ------ | ------ | ------ | ------ | ------ |
| `id` | igen | **string** | A gyógyszer üzleti azonosítója. | számsor, pl. _1045813_ |
| `code` | - | **string** | Egy kód (vagy kódok csoportja), amely meghatározza ezt a gyógyszert, vagy egy szöveges leírás, ha nincs kód. | kódok listája: [SNOMED](https://www.hl7.org/fhir/valueset-medication-codes.html) |
| `status` | - | **string** típusú objektum | 3 állapota lehet: `active`, `inactive`, `entered-in-error` | |
| `manufacturer` | - | **string** | A gyógyszer gyártója. |
| `form` | - | **string** típusú objektum | A gyógyszer típusa. 3 állapota lehet: `powder`, `tablets`, `capsule` | |
| `amount` | - | **string** | Mennyiség. | Például 3 ml |

### Ingredient
| Név | Kötelező | Típus | Leírás | Egyéb
| ------ | ------ | ------ | ------ | ------ |
| `ingId` | igen | **string** | Azonosító. | |
| `item` | igen | objektum | A hatóanyag neve. | |
| `isActive` | - | **boolean** típusú objektum |  |  |
| `strength` | - | **string** | Például 75 mg. |

### Batch
| Név | Kötelező | Típus | Leírás |
| ------ | ------ | ------ | ------ |
| `btid` | - | **string** típusú objektum |  Azonosító. |
| `lotNumber` | - | **number** típusú objektum |
| `expirationDate` | - | **string** típusú objektum |