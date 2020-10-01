import {
	trigger, animateChild, group,
	transition, animate, style, query
} from '@angular/animations';

export const SlideInAnimation =
	trigger('routeAnimations', [
		transition('* <=> *', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%', // fix dans css principal ?
				})
			]),
			query(':enter', [
				style({ left: '-100%' })
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('200ms ease-out', style({ left: '100%' }))
				]),
				query(':enter', [
					animate('300ms ease-out', style({ left: '0%' }))
				])
			]),
			query(':enter', animateChild()),
		]),
		/*
	transition('* <=> Formation', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [
			style({ left: '-100%' })
		]),
		query(':leave', animateChild()),
		group([
			query(':leave', [
				animate('200ms ease-out', style({ left: '100%' }))
			]),
			query(':enter', [
				animate('300ms ease-out', style({ left: '0%' }))
			])
		]),
		query(':enter', animateChild()),
	])
		 */
	]);

export const fader =
	trigger('routeAnimations', [
		transition('* <=> *', [
			query(':enter, :leave', [
				style({
					position: 'absolute',
					left: 0,
					width: '100%',
					opacity: 0,
					transform: 'scale(0) translateY(100%)'
				})
			], { optional: true }),
			query(':enter', [
				animate('600ms ease', style({
					opacity: 1, transform: 'scale(1) translateY(0)'
				})),
			], { optional: true })
		])
	]);
