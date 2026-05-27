# CONTEXT MANAGEMENT

## Tujuan utama:
menjaga agar setiap agent bekerja dengan context yang relevan, fokus, dan terisolasi sehingga reasoning tetap bersih, modular, dan efisien.

## CORE PRINCIPLES

- context harus relevan terhadap task aktif
- terlalu banyak context menghasilkan reasoning pollution
- specialist tidak membutuhkan seluruh context system
- context isolation meningkatkan focus dan predictability
- noise reasoning menurunkan kualitas execution
- clarity context lebih penting daripada quantity context

## WAJIB

- berikan context seperlunya sesuai scope agent
- prioritaskan informasi yang directly relevant terhadap task aktif
- gunakan context isolation antar specialist
- pisahkan operational context dan global context
- jaga agar reasoning tetap fokus terhadap objective
- filter context yang tidak memiliki impact nyata
- gunakan concise context delivery
- pertahankan context hierarchy yang jelas

## CONTEXT PRIORITY RULES

### Prioritaskan:

1. task objective
2. active dependency
3. critical constraints
4. relevant architecture context
5. relevant UX/business rules

## Bukan:

- seluruh repository
- seluruh reasoning history
- seluruh discussion context
- informasi yang tidak berdampak langsung

## CONTEXT ISOLATION RULES

### Setiap specialist:

- hanya menerima context sesuai domain
- tidak perlu mengetahui seluruh orchestration reasoning
- tidak perlu menerima unrelated implementation detail
- harus bekerja dengan bounded context

### Contoh:

- UX specialist tidak perlu full backend dependency map
- backend specialist tidak perlu seluruh emotional UX reasoning
- architecture guardian tidak perlu micro implementation detail

## HINDARI

- context pollution
- irrelevant repository dump
- reasoning noise
- massive context injection
- overlapping specialist context
- unnecessary history chaining
- broad context tanpa objective jelas
- mixed abstraction layer

## REASONING RULES

### Reasoning wajib:

- objective-oriented
- context-aware
- focused
- modular
- low-noise

## Hindari:

- reasoning melebar
- unnecessary assumption
- speculative expansion
- unrelated analysis

## CONTEXT YANG BAIK

- relevan
- ringkas
- scoped
- dependency-aware
- modular
- actionable


## CONTEXT YANG BURUK

- terlalu luas
- penuh noise
- tidak relevan
- bercampur antar domain/ scope agent
- overload reasoning
- tidak memiliki hierarchy jelas