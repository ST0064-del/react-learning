# react-learning

Just for learning react and design patterns

# 🎯 Projet : Task Manager Avancé

Objectif : Développer une application permettant aux utilisateurs de créer, modifier et suivre des tâches avec différentes fonctionnalités avancées.

🔹 ## Fonctionnalités principales :
✅ Ajouter, modifier, supprimer des tâches 📋
✅ Catégoriser les tâches (Travail, Perso, Urgent, etc.)
✅ Notifications (e-mails, SMS, popup) 🔔
✅ Mode multi-utilisateurs avec rôles et permissions 👥
✅ Ajout dynamique de nouvelles stratégies de tri et d’affichage

📌 Patrons de conception à utiliser
1️⃣ Factory Method – Pour gérer la création de tâches
Pourquoi ? Permet de créer différents types de tâches selon leur priorité ou leur nature.
Exemple : Une classe TaskFactory qui génère soit une TaskStandard, soit une TaskUrgente, etc.

2️⃣ Singleton – Pour la gestion des notifications
Pourquoi ? Garantir qu'il n'existe qu'une seule instance du gestionnaire de notifications.
Exemple : Un NotificationManager qui centralise l'envoi des notifications (email, SMS, etc.).

3️⃣ Observer – Pour les notifications dynamiques
Pourquoi ? Lorsqu'une tâche est créée ou modifiée, tous les abonnés (utilisateurs, logs, etc.) doivent être avertis.
Exemple : Un utilisateur peut s’abonner aux mises à jour d’une tâche et recevoir une notification en cas de changement.

4️⃣ Decorator – Pour ajouter des fonctionnalités aux tâches
Pourquoi ? Ajouter des rappels, étiquettes, pièces jointes sans modifier la classe principale Task.
Exemple : Un ReminderDecorator qui ajoute une alarme aux tâches.

5️⃣ Strategy – Pour le tri et le filtrage des tâches
Pourquoi ? Différents utilisateurs veulent afficher les tâches par priorité, par date, par statut, etc.
Exemple : Une classe SortingStrategy qui permet de changer l’algorithme de tri dynamiquement.

6️⃣ Facade – Pour simplifier l’accès aux données
Pourquoi ? Offrir une API simplifiée aux développeurs en masquant la complexité des requêtes vers la base de données.
Exemple : Une classe TaskService qui gère l'accès aux tâches via des méthodes simples (getAllTasks(), addTask(), etc.).

7️⃣ Mediator – Pour gérer les communications entre composants
Pourquoi ? Au lieu d’avoir des dépendances directes entre les composants (UI, Backend, Notif), on passe par un intermédiaire.
Exemple : Un TaskMediator qui orchestre la communication entre les modules (UI ↔ Backend ↔ Notifications).

## 🔧 Technologies suggérées

Backend : Django (Python)
Frontend : React
Base de données : MongoDB
Notifications : WebSockets pour temps réel
