SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'a1a4b170-a68e-4f00-9f63-00a2eb92ca78', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"teguhirawan1996@gmail.com","user_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","user_phone":""}}', '2024-07-24 07:14:15.329062+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a5af55e-e890-4e7a-96d1-37fa6ffdb00a', '{"action":"login","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-24 07:15:01.220429+00', ''),
	('00000000-0000-0000-0000-000000000000', '45610ed4-42d3-494f-84fe-a1b33705163f', '{"action":"logout","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-24 07:47:42.673848+00', ''),
	('00000000-0000-0000-0000-000000000000', '4498c744-be64-4dd5-9a15-655c8273b819', '{"action":"login","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-24 07:55:45.938477+00', ''),
	('00000000-0000-0000-0000-000000000000', '2a80aab3-f15c-453f-b04e-1197c7a418e9', '{"action":"logout","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-24 07:55:50.364218+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fae8d774-cd24-44fe-8afc-d5655ecb8372', '{"action":"login","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-24 07:56:17.847053+00', ''),
	('00000000-0000-0000-0000-000000000000', '7bf1a2e5-c307-43c3-a15b-6b05ec155f45', '{"action":"logout","actor_id":"cd438ead-6ec4-4640-8802-d8dec1380e5e","actor_username":"teguhirawan1996@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-24 07:56:20.958749+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'cd438ead-6ec4-4640-8802-d8dec1380e5e', 'authenticated', 'authenticated', 'teguhirawan1996@gmail.com', '$2a$10$RPG/xUSEyc4fbVB2XqZHdOmtmUSPRxqkUAKr71JN50rFlEnJt4Tl2', '2024-07-24 07:14:15.331364+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-07-24 07:56:17.847685+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-07-24 07:14:15.325934+00', '2024-07-24 07:56:17.849357+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('cd438ead-6ec4-4640-8802-d8dec1380e5e', 'cd438ead-6ec4-4640-8802-d8dec1380e5e', '{"sub": "cd438ead-6ec4-4640-8802-d8dec1380e5e", "email": "teguhirawan1996@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-24 07:14:15.328072+00', '2024-07-24 07:14:15.32811+00', '2024-07-24 07:14:15.32811+00', 'a4648bac-1b54-42c8-85be-b29ee6d10218');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "username", "status") VALUES
	('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'supabot', 'OFFLINE');


--
-- Data for Name: channels; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."channels" ("id", "inserted_at", "slug", "created_by") VALUES
	(1, '2024-07-24 07:32:54.207458+00', 'public', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e'),
	(2, '2024-07-24 07:32:54.207458+00', 'random', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e');


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."messages" ("id", "inserted_at", "message", "user_id", "channel_id") VALUES
	(1, '2024-07-24 07:32:54.207458+00', 'Hello World 👋', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 1),
	(2, '2024-07-24 07:32:54.207458+00', 'Perfection is attained, not when there is nothing more to add, but when there is nothing left to take away.', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 2);


--
-- Data for Name: role_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."role_permissions" ("id", "role", "permission") VALUES
	(1, 'admin', 'channels.delete'),
	(2, 'admin', 'messages.delete'),
	(3, 'moderator', 'messages.delete');


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 3, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: channels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."channels_id_seq"', 2, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."messages_id_seq"', 2, true);


--
-- Name: role_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."role_permissions_id_seq"', 3, true);


--
-- Name: user_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."user_roles_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
